import PageTemplate, { PageHeading } from "./page_template";

export default function Error(){
    return (
        <>
            <PageTemplate>
                <PageHeading heading='404 | page not found'/>
            </PageTemplate>
        </>
    )
}