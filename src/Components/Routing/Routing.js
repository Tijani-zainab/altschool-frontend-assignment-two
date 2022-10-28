import { NotFound, Landing, About, SecretAbout } from "../../Pages";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/about" element={<About />}>
                <Route path=":secretId" element={<SecretAbout />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default Routing;

