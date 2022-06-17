import React from 'react';

export const Row = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }

    return (
        <div key={props.Key} id={props.id} className={props.className} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
}

export const RowLeft = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }

    return (
        <div key={props.Key} id={props.id} className={props.className} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
            {props.children}
        </div>
    )
}

export const RowRight = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

    return (
        <div key={props.Key} id={props.id} className={props.className} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
}

export const RowCenter = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div key={props.Key} id={props.id} className={props.className} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
};

export const RowEvenly = (props) => {
    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
    return (
        <div key={props.Key} id={props.id} className={props.className} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            {props.children}
        </div>
    )
}

export const Col = (props) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",

    }
    return (
        <div key={props.KEY} id={props.id} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={props.className}>
            {props.children}
        </div>
    )
}

export const ColLeft = (props) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
    }
    return (
        <div key={props.KEY} id={props.id} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={props.className} onInput={props.onInput} contentEditable={props.contentEditable}>
            {props.children}
        </div>
    )
}

export const ColRight = (props) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
    }
    return (
        <div key={props.KEY} id={props.id} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={props.className}>
            {props.children}
        </div>
    )
}
export const ColCenter = (props) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        <div key={props.KEY} id={props.id} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} onDoubleClick={props.onDoubleClick} className={props.className}>
            {props.children}
        </div>
    )
}
export const ColEvenly = (props) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    }
    return (
        <div key={props.KEY} id={props.id} style={{ ...style, ...props.style ? props.style : {} }} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className={props.className}>
            {props.children}
        </div>
    )
}
