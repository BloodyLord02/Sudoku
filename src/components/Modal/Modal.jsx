import ReactDOM from "react-dom"
import "./Modal.css"
import Button from "../Button/Button"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SettingsSchema = Yup.object().shape({
  difficulty: Yup.string().required("Оберіть складність"),
})

export default function Modal({ isOpen, type, score, onRestart, onClose, onGoHome, usePortal = true }) {
  if (!isOpen) return null;

  const content = (
    <div className="modal-window">
      {type === "finish" && (
        <>
          <h2>Гру завершено!</h2>
          <p>Ваш результат: {score}</p>
          <div className="buttons">
            <Button onClick={onGoHome}>Почати заново</Button>
            <Button onClick={onClose}>Закрити</Button>
          </div>
        </>
      )}
      {type === "menu" && (
        <>
          <h2>Меню гри</h2>
          <Formik
            initialValues={{ difficulty: localStorage.getItem("difficulty") || "medium", }}
            validationSchema={SettingsSchema}
            onSubmit={(values) => { localStorage.setItem( "difficulty", values.difficulty);
              onRestart();
              onClose();
            }}
          >
            {({ errors, touched }) => (
              <Form className="form-card">
                <label className="form-label">
                  Змінити складність
                </label>
                <Field
                  as="select"
                  name="difficulty"
                  className={`form-select ${ errors.difficulty && touched.difficulty ? "error" : "" }`}
                >
                  <option value="easy">🟢 Легка</option>
                  <option value="medium">🟡 Середня</option>
                  <option value="hard">🔴 Складна</option>
                </Field>
                {errors.difficulty &&touched.difficulty && (
                    <div className="form-error">
                      {errors.difficulty}
                    </div>
                  )}
                <div className="form-buttons">
                  <Button type="submit">
                    Рестарт гри
                  </Button>
                  <Button
                    type="button"
                    onClick={onGoHome}
                  >
                    Головний екран
                  </Button>
                  <Button
                    type="button"
                    onClick={onClose}
                  >
                    Продовжити
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
  return usePortal
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          {content}
        </div>,
        document.body
      )
    : (
      <div className="modal-overlay">
        {content}
      </div>
    );
}