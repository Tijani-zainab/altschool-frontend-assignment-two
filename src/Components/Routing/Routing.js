import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { Contact, Users, About, SecretAbout } from "../../Pages";
// let NotFound = lazy(() => import('../../Pages/NotFound/NotFound'));


const Routing = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />}>
                <Route path="secret" element={<SecretAbout />} />
                <Route path=":secretId" element={<SecretAbout />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default Routing;

