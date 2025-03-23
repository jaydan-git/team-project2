import { useState } from "react";

const Welcome = ({name}) => {
     
    name = "zaidan"
    const [count] = useState(18)

    return <h1>hello my name is {name} age {count}</h1>
}
export default Welcome