import { Children } from 'react'; 
export const Section = ({title}) => {
    return (
        <Section>
        <h2>{title}</h2>
        {Children}
        </Section>
    )
}