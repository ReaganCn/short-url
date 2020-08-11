import React, { Fragment } from "react";

import SignInConnected from "./views/containers/SignInContainer";
import ShortConnected from "./views/containers/ShortContainer";

const App = (props) => {
return (
<Fragment>
    <SignInConnected />
    <ShortConnected />
</Fragment>
)
}

export default App;