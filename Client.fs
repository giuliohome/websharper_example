namespace FSharpHtmlSiteExample

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Client
open WebSharper.UI.Html


open WebSharper.Google.Visualization
open WebSharper.Google.Visualization.Base

[<JavaScript>]
module Client =

    let DoSomething (input: string) =
        System.String(Array.rev(input.ToCharArray()))

    let Main () =
        let rvInput = Var.Create ""
        let submit = Submitter.CreateOption rvInput.View
        let vReversed =
            submit.View.Map(function
                | None -> ""
                | Some input -> DoSomething input
            )
        div [] [
            Doc.Input [] rvInput
            Doc.Button "Send" [] submit.Trigger
            hr [] []
            h4 [attr.``class`` "text-muted"] [text "The server responded:"]
            div [attr.``class`` "jumbotron"] [h1 [] [textView vReversed]]
        ]



    let TableData () =
            let data = new Base.DataTable()
            data.addColumn(ColumnType.StringType, "Name") |> ignore
            data.addColumn(ColumnType.NumberType, "Height") |> ignore
            data.addRows(3) |> ignore
            data.setCell(0, 0, "Tong Ning mu") |> ignore
            data.setCell(1, 0, "Huang Ang fa") |> ignore
            data.setCell(2, 0, "Teng nu") |> ignore
            data.setCell(0, 1, 174.) |> ignore
            data.setCell(1, 1, 523.) |> ignore
            data.setCell(2, 1, 86.) |> ignore
            data


    let TableExample () =
        (div [] []).OnAfterRender (fun container ->
            let visualization = new Table(container)
            let options =
                TableOptions(
                    showRowNumber = true,
                    width = "600")
            visualization.draw(TableData(), options))

    let InputTransform () =
        let cls s = attr.``class`` s
        let rvText = Var.Create ""
        let inputField =
            div [cls "panel panel-default"] [
                div [cls "panel-heading"] [
                    h3 [cls "panel-title"] [
                        text "Input"
                    ]
                ]
                div [cls "panel-body"] [
                    form [cls "form-horizontal"; Attr.Create "role" "form"] [
                        div [cls "form-group"] [
                            label [cls "col-sm-4 control-label"; attr.``for`` "inputBox"] [
                                Doc.TextNode "Write something: "
                            ]
                            div [cls "col-sm-8"] [
                                Doc.Input [cls "form-control"; attr.id "inputBox"] rvText
                            ]
                        ]
                    ]
                ]
            ]

        let view = View.FromVar rvText

        let viewCaps =
            view |> View.Map (fun s -> s.ToUpper())
        let viewReverse =
            view |> View.Map (fun s -> new string(Array.rev(s.ToCharArray())))
        let viewWordCount =
            view |> View.Map (fun s -> 
                (s.Split([| ' ' |]) 
                |> Array.filter (fun w -> w.Trim().Length>0) ).Length)
        let viewWordCountStr =
            View.Map string viewWordCount
        let viewWordOddEven =
            View.Map (fun i -> if i % 2 = 0 then "Even" else "Odd") viewWordCount
        let viewMouseCoordinates =
            Input.Mouse.Position.Map (fun (x,y) -> sprintf "%d:%d" y x)
            
        let views =
            [
                ("Entered Text", view)
                ("Capitalised", viewCaps)
                ("Reversed", viewReverse)
                ("Word Count", viewWordCountStr)
                ("Word count odd or even?", viewWordOddEven)
                ("Mouse coordinates", viewMouseCoordinates)
            ]

        let tableRow (lbl, view) =
            tr [] [
                td [] [text lbl]
                td [attr.style "width:66%"] [
                    textView view
                ]
            ] :> Doc

        let tbl =
            div [cls "panel panel-default"] [
                div [cls "panel-heading"] [
                    h3 [cls "panel-title"] [
                        text "Output"
                    ]
                ]
                div [cls "panel-body"] [
                    table [cls "table"] [
                        tbody [] [
                            List.map tableRow views |> Doc.Concat 
                        ]
                    ]
                ]
            ]

        let content =
            div [] [
                inputField
                tbl
            ]

        content