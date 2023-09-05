import HeadNext from 'next/head'

export default function Head(props) {
    return (
        <>
            <HeadNext>
                <title>{props.title ? props.title : 'CoderGustavo'}</title>
                <meta name="description" content={props.description ? props.description : 'CoderGustavo a moda do agora!'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </HeadNext>
        </>
    )
}
