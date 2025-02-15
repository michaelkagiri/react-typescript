import React from "react";

interface greetingProps {
    name:string;
}

const Greeting: React.FC<greetingProps> = ({name}) => {
    return <div>hello, {name}!</div>;
};

export default Greeting;