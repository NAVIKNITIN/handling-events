import  { useEffect } from 'react'

const Title = (title) => {
    useEffect(() => {
        document.title = title;

        return () => {
            console.log("clean up")

        };
    });
};

export default Title
