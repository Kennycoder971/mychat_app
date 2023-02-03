import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <div className={styles.container}>
      <h1 className="mt-3 ">Bienvenue</h1>
      <main style={{ maxWidth: 500 }}>
        <Form className="mt-3 " action="/room">
          <Form.Group>
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Tapez votre nom d'utilisateur"
            />
          </Form.Group>

          <Form.Group className="mt-3 ">
            <Form.Label>Sélectionnez un salon</Form.Label>
            <Form.Select aria-label="Selection de salon" name="room">
              <option value="javascript">Javascript</option>
              <option value="php">Php</option>
              <option value="python">Python</option>
            </Form.Select>
          </Form.Group>
          <Button className="mt-3 " type="submit">
            Envoyer
          </Button>
        </Form>
      </main>
    </div>
  );
}
