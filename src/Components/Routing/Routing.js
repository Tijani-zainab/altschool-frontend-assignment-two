import { lazy } from 'react';
import { NotFound, Landing, Contact, Users, About, SecretAbout } from "../../Pages";
import { Routes, Route } from "react-router-dom";


const Routing = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />}>
                <Route path=":secretId" element={<SecretAbout />} />
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default Routing;

