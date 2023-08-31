return (
  <div>
    <Formik
      initialValues={inputs}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Your submit logic here
        console.log("Submitting form with values:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <form>
          <label>
            Enter your Name :
            <Field
              type="text"
              name="firstname"
              value={inputs.firstname}
              onChange={handleChange}
            />
            <ErrorMessage name="firstname" component="div" className="error" />
          </label>
          <br />
          <label>
            Enter your Phone Number :
            <Field
              type="number"
              name="phnum"
              value={inputs.phnum}
              onChange={handleChange}
            />
            <ErrorMessage name="phnum" component="div" className="error" />
          </label>
          <br />
          <label>
            Enter your Date of Birth :
            <Field
              type="date"
              name="dob"
              value={inputs.dob}
              onChange={handleChange}
            />
            <ErrorMessage name="dob" component="div" className="error" />
          </label>
          <br />
          <label>
            Enter your Address :
            <Field
              type="text"
              name="addr"
              value={inputs.addr}
              onChange={handleChange}
            />
            <ErrorMessage name="addr" component="div" className="error" />
          </label>
          <br />
          <p>Gender?</p>
          <label>
            <Field
              type="radio"
              name="gender"
              value="Male"
              onChange={onGenselect}
              checked={gender === "Male"}
            />
            Male
          </label>
          <br />
          <label>
            <Field
              type="radio"
              name="gender"
              value="Female"
              onChange={onGenselect}
              checked={gender === "Female"}
            />
            Female
          </label>
          <br />
          <label>
            <Field
              type="radio"
              name="gender"
              value="Others"
              onChange={onGenselect}
              checked={gender === "Others"}
            />
            Others
          </label>
          <p>Select the vehicles you have : </p>
          <Field
            type="checkbox"
            name="car"
            onChange={(e) => chkhandleOnChange(e, "car")}
            checked={checkbox.car === "yes"}
          />
          <label> Car</label>
          <Field
            type="checkbox"
            name="bike"
            onChange={(e) => chkhandleOnChange(e, "bike")}
            checked={checkbox.bike === "yes"}
          />
          <label> Bike</label>
          <Field
            type="checkbox"
            name="auto"
            onChange={(e) => chkhandleOnChange(e, "auto")}
            checked={checkbox.auto === "yes"}
          />
          <label> Auto</label>
          <br />
          <br />

          {!updateval ? (
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          ) : (
            <button onClick={() => updateBtn()} disabled={isSubmitting}>
              Update
            </button>
          )}
        </form>
      )}
    </Formik>

    {view.length === 0 ? (
      <table>{/* ... Your table rendering code ... */}</table>
    ) : (
      <table>{/* ... Your table rendering code ... */}</table>
    )}
  </div>
);
