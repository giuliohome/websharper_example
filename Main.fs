namespace FSharpHtmlSiteExample

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "GET /">] Home
    | [<EndPoint "GET /about">] About
    | [<EndPoint "GET /google">] GDataView
    | [<EndPoint "GET /react">] ReactView

module Templating =
    open WebSharper.UI.Html

    type MainTemplate = Templating.Template<"Main.html">

    // Compute a menubar where the menu item for the given endpoint is active
    let MenuBar (ctx: Context<EndPoint>) endpoint : Doc list =
        let ( => ) txt act =
             li [if endpoint = act then yield attr.``class`` "active"] [
                a [attr.href (ctx.Link act)] [text txt]
             ]
        [
            "Home" => EndPoint.Home
            "About" => EndPoint.About
            "Reactive" => EndPoint.ReactView
            "Google DataView" => EndPoint.GDataView
        ]

    let Main ctx action (title: string) (body: Doc list) =
        Content.Page(
            MainTemplate()
                .Title(title)
                .MenuBar(MenuBar ctx action)
                .Body(body)
                .Doc()
        )


module Site =
    open WebSharper.UI.Html


    let HomePage ctx =
        Templating.Main ctx EndPoint.Home "Home" [
            h1 [] [text "Say Hi to JavaScript!"]
            div [] [client <@ Client.Main() @>]
        ]


    let AboutPage ctx =
        Templating.Main ctx EndPoint.About "About" [
            h1 [] [text "About"]
            p [] [text "This is a template WebSharper client-server application."]
        ]

    let ReactPage ctx =
        Templating.Main ctx EndPoint.ReactView "Reactive Page" [
            h1 [] [text "Reactive Binding"]
            p [] [text "Two-way binding with reactive variables"]
            div [] [client <@ Client.InputTransform () @>]
        ]
    
    let DataPage ctx =
        Templating.Main ctx EndPoint.GDataView "Google DataView Page" [
            h1 [] [text "Here it is the Google DataView"]
            p [] [text "This is a template WebSharper client-server application."]
            div [] [client <@ Client.TableExample () @>]
        ]

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx action ->
            match action with
            | Home -> HomePage ctx
            | About -> AboutPage ctx
            | ReactView -> ReactPage ctx
            | GDataView -> DataPage ctx
        )

[<Sealed>]
type Website() =
    interface IWebsite<EndPoint> with
        member this.Sitelet = Site.Main
        member this.Actions = [Home; About; GDataView; ReactView]

[<assembly: Website(typeof<Website>)>]
do ()
