import { useState } from "react";
import RoleSelectionModal from "../components/RoleSelectionModal"; // Adjust the path if needed
import { Button } from "@/components/ui/button";

const AuthPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(true); // Opens modal on load

    return (
        <div>
            <RoleSelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <Button onClick={() => setIsModalOpen(true)}>Choose Role</Button>
        </div>
    );
};

export default AuthPage;
