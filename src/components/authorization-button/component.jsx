import { useCallback, useState } from "react";
import { useUser } from "../../contexts/user/hooks";
import { Button } from "../button/component";
import { Modal } from "../modal/component";
import { AuthorizationForm } from "../authorization-form/component";

export const AuthorizationButton = () => {
  const { user, logout, login } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleLogin = useCallback(
    (name) => {
      login(name);
      handleClose();
    },
    [login, handleClose]
  );

  return (
    <div>
      <span>{user}</span>
      {user ? (
        <Button onClick = {logout}>Logout</Button>
      ) : (
        <Button onClick = {() => setIsVisible(true)}>Login</Button>
      )}
      {isVisible && (
        <Modal onClose = {handleClose}>
          <AuthorizationForm
            onLogin = {handleLogin}
            onCancel = {handleClose}
          />
        </Modal>
      )}
    </div>
  );
};
