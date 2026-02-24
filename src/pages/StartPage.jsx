import { useState } from "react"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SettingsSchema = Yup.object().shape({
  difficulty: Yup.string().required("Оберіть складність"),
})

export default function StartPage({ onStart }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="page center-page">
      <Header title="Sudoku Game" />
      {!showForm ? (
        <Button onClick={() => setShowForm(true)}>Почати гру</Button>
      ) : (
        <Formik initialValues={{ difficulty: localStorage.getItem("difficulty") || "medium", }}
          validationSchema={SettingsSchema}
          onSubmit={(values) => { localStorage.setItem( "difficulty", values.difficulty);
            setTimeout(() => onStart(), 0);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-card">
              <label className="form-label">
                Складність гри
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
              {errors.difficulty && touched.difficulty && (
                  <div className="form-error">
                    {errors.difficulty}
                  </div>
                )}
              <div className="form-buttons">
                <Button type="submit">
                  Почати гру
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowForm(false)}
                >
                  Назад
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}