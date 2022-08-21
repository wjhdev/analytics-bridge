/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Connection, Post } from "@webpress/core";
export namespace Components {
    interface AbDashWidget {
        "global": Connection.Context;
    }
    interface AbPopularPosts {
        "global": Connection.Context;
        "renderPost": (post: Post, weight: number, maxWeight: number) => any;
        "size": any;
    }
}
declare global {
    interface HTMLAbDashWidgetElement extends Components.AbDashWidget, HTMLStencilElement {
    }
    var HTMLAbDashWidgetElement: {
        prototype: HTMLAbDashWidgetElement;
        new (): HTMLAbDashWidgetElement;
    };
    interface HTMLAbPopularPostsElement extends Components.AbPopularPosts, HTMLStencilElement {
    }
    var HTMLAbPopularPostsElement: {
        prototype: HTMLAbPopularPostsElement;
        new (): HTMLAbPopularPostsElement;
    };
    interface HTMLElementTagNameMap {
        "ab-dash-widget": HTMLAbDashWidgetElement;
        "ab-popular-posts": HTMLAbPopularPostsElement;
    }
}
declare namespace LocalJSX {
    interface AbDashWidget {
        "global"?: Connection.Context;
    }
    interface AbPopularPosts {
        "global"?: Connection.Context;
        "renderPost"?: (post: Post, weight: number, maxWeight: number) => any;
        "size"?: any;
    }
    interface IntrinsicElements {
        "ab-dash-widget": AbDashWidget;
        "ab-popular-posts": AbPopularPosts;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ab-dash-widget": LocalJSX.AbDashWidget & JSXBase.HTMLAttributes<HTMLAbDashWidgetElement>;
            "ab-popular-posts": LocalJSX.AbPopularPosts & JSXBase.HTMLAttributes<HTMLAbPopularPostsElement>;
        }
    }
}
