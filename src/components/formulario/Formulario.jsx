import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Formulario.css';

const FormularioComentario = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (storedComments) {
      setCommentsList(storedComments);
    }
  }, []);

  const capturarNombre = (e) => {
    setName(e.target.value);
  }

  const capturarSurName = (e) => {
    setSurname(e.target.value);
  }

  const capturarComentario = (e) => {
    setComment(e.target.value);
  }

  function enviar(e) {
    e.preventDefault();
    if (name === '' || surname === '' || comment === '') {
      alert('Complete el formulario');
      setFeedback('');
    } else {
      const newComment = {
        nombre: name,
        apellido: surname,
        comentario: comment
      };
      const updatedComments = [...commentsList, newComment].slice(-3);
      setCommentsList(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setFeedback('¡Gracias por tu opinión! Tu satisfacción es nuestra prioridad. ¡Cultiva tus sueños con nuestras semillas de cannabis de alta calidad!');
    }
  }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
      <div className='contenedor' style={{ display: 'flex', flexDirection: 'column' }}> 
        {feedback !== '' ? (
          <>
            <p className="feedback">{feedback}</p>
            {commentsList.map((comment, index) => (
              <div key={index} className="mensaje" style={{ marginBottom: index < commentsList.length - 1 ? '10px' : '0'}}>
                <p>{comment.nombre} {comment.apellido}: {comment.comentario}</p>
              </div>
            ))}
          </>
        ) : (
          <Form onSubmit={enviar}>
            <Form.Group controlId="formNombre">
              <Form.Label className="etiquetas">Nombre</Form.Label>
              <input type="text" placeholder="Ingrese su nombre" onChange={capturarNombre} />
            </Form.Group>

            <Form.Group controlId="formApellido">
              <Form.Label className="etiquetas">Apellido</Form.Label>
              <input type="text" placeholder="Ingrese su apellido" onChange={capturarSurName} />
            </Form.Group>

            <Form.Group controlId="formComentario">
              <Form.Label className="etiquetas">Comentario</Form.Label>
              <textarea rows="5" placeholder="Ingrese su comentario" onChange={capturarComentario} />
            </Form.Group>

            <Button className="boton-celeste" type="submit">
              Enviar
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default FormularioComentario;

