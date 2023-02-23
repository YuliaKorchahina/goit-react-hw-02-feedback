
export const Section = ({title,children}) => { 
    return ( 
        <Section> 
        {children} 
        <h2>{title}</h2> 
        </Section> 
    ) 
}