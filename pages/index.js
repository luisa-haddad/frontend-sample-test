import Template from '../components/Template'
import Search from '../components/Search'

const Index = props => {

    return (
        <Template>
            <Search  />
            <style jsx global>{`
                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }

                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }

                body {
                    line-height: 1;
                    font-family: 'Verdana', sans-serif;
                    font-size: 16px;
                    letter-spacing: 0.3px;
                }

                ol,
                ul {
                    list-style: none;
                }
                strong {
                font-weight: 600;
                }
            `}</style>
        </Template>
    )
}

export default Index