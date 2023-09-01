import React from "react";
import { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Forms = () => {
  const [inputs, setInputs] = useState({
    id: "",
    firstname: "",
    phnum: "",
    dob: "",
    addr: "",
  });

  const [id_, setid_] = useState([]);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const [gender, setGender] = useState("");

  const onGenselect = (e) => {
    setGender(e.target.value);
  };

  //const [isChecked, setIsChecked] = useState(false);
  const [checkbox, setCheckbox] = useState({
    car: "",
    bike: "",
    auto: "",
  });

  const chkhandleOnChange = (check, name) => {
    const data = check.target.checked;
    setCheckbox({
      ...checkbox,
      [name]: data ? "yes" : "No",
    });
  };

  const [emp, setemp] = useState("");

  const onsetemp = (event) => {
    setemp(event.target.value);
  };

  const [displaydet, setdisplaydet] = useState(false);
  const [view, setview] = useState([]);
  const [usersData, setusersData] = useState([]);

  function submit(e) {
    e.preventDefault();
    const userData = {
      id: new Date().getTime(),
      firstname: inputs.firstname,
      phnum: inputs.phnum,
      dob: inputs.dob,
      addr: inputs.addr,
      gender: gender,
      vehicles: {
        car: checkbox.car == "yes",
        bike: checkbox.bike == "yes",
        auto: checkbox.auto == "yes",
      },
    };

    console.log("id", userData);

    setusersData([...usersData, userData]);
    setid_([...id_, userData.id]);
    setInputs({
      firstname: "",
      phnum: "",
      dob: "",
      addr: "",
    });
    setGender("");
    setCheckbox({
      car: false,
      bike: false,
      auto: false,
    });

    setemp("");

    console.log("state", inputs);
    console.log("radio", gender);
    console.log("check", checkbox);
    console.log("employ", emp);
    //setdisplaydet(true);

    console.log("id___", id_);
  }

  const deleteUserData = (indexTodelete) => {
    setusersData((data) => {
      const newarr = [...data];
      newarr.splice(indexTodelete, 1);

      return newarr;
    });
  };

  const [selUserIndex, setselUserIndex] = useState();

  const ViewUserData = (user) => {
    setview([user]);
  };

  const [updateval, setUpdateval] = useState(false);
  const [editedData, seteditedData] = useState([]);

  const editData = (user) => {
    console.log("00", user);

    // const edits = usersData.filter((each) => {
    //   const { id } = each;
    //   // return{
    //   id.includes(user.id);
    //   // }
    // });
    // console.log("000", edits);

    // const edits = usersData.find((id) => {
    //   id.id == user.id;
    //   return;
    // // });
    // console.log("iddd", edits);
    setUpdateval(true);

    setInputs(user);
    setGender(user.gender);
    setCheckbox({
      car: user.vehicles.car ? "yes" : "no",
      bike: user.vehicles.bike ? "yes" : "no",
      auto: user.vehicles.auto ? "yes" : "no",
    });
  };

  const updateBtn = () => {
    setUpdateval(false);

    setusersData((data) => {
      return data.map((usersData) => {
        if (usersData.id === inputs.id) {
          return {
            ...usersData,
            firstname: inputs.firstname,
            phnum: inputs.phnum,
            dob: inputs.dob,
            addr: inputs.addr,
            gender: gender,
            vehicles: {
              car: checkbox.car === "yes",
              bike: checkbox.bike === "yes",
              auto: checkbox.auto === "yes",
            },
          };
        }
        // else {
        //   ret;
        // }
      });
    });

    setInputs({
      id: "",
      firstname: "",
      phnum: "",
      dob: "",
      addr: "",
    });
    setGender("");
    setCheckbox({
      car: false,
      bike: false,
      auto: false,
    });
  };

  const cancelBtn = () => {
    setUpdateval(false);
    setInputs({
      firstname: "",
      phnum: "",
      dob: "",
      addr: "",
    });
    setGender("");
    setCheckbox({
      car: false,
      bike: false,
      auto: false,
    });
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    phnum: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    dob: Yup.date().required("Date of birth is required"),
    addr: Yup.string().required("Address is required"),
    gender: Yup.string().required("Gender is required"),
  });

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Enter your Name :</Form.Label>
          <Form.Control
            name="firstname"
            type="text"
            placeholder="First Name"
            value={inputs.firstname}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        {/* <label>
          Enter your Name :<p>{inputs.firstname}</p>
          <input
            name="firstname"
            type="text"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label> */}
        <br></br>

        <Form.Group>
          <Form.Label>Enter your Phone Number :</Form.Label>
          <Form.Control
            name="phnum"
            type="number"
            placeholder="Mobile"
            value={inputs.phnum}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {/* <label>
          Enter your Phone Number :
          <input
            name="phnum"
            type="number"
            value={inputs.phnum}
            onChange={handleChange}
          />
        </label> */}

        <br></br>
        <Form.Group>
          <Form.Label>Enter your Date of Birth :</Form.Label>
          <Form.Control
            name="dob"
            type="date"
            placeholder="Date when you were born."
            value={inputs.dob}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        {/* <label>
          Enter your Date of Birth :
          <input
            name="dob"
            type="date"
            value={inputs.dob}
            onChange={handleChange}
          />
        </label> */}
        <br></br>
        <Form.Group>
          <Form.Label>Enter your Address :</Form.Label>
          <Form.Control
            name="addr"
            type="text"
            placeholder="Address"
            value={inputs.addr}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <br></br>
        <p>Gender?</p>

        <Form.Group controlId="gender">
          <Form.Check
            value="Male"
            type="radio"
            aria-label="radio 1"
            label="Male"
            onChange={onGenselect}
            checked={gender === "Male"}
          />
          <Form.Check
            value="Female"
            type="radio"
            aria-label="radio 1"
            label="Female"
            onChange={onGenselect}
            checked={gender === "Female"}
          />
          <Form.Check
            value="Others"
            type="radio"
            aria-label="radio 1"
            label="Others"
            onChange={onGenselect}
            checked={gender === "Others"}
          />
        </Form.Group>
        <br></br>

        <Form.Group>
          <Form.Label>Select the vehicles you have:</Form.Label>
          <div>
            <Form.Check
              type="checkbox"
              id="car"
              label="Car"
              checked={checkbox.car === "yes"}
              onChange={(e) => chkhandleOnChange(e, "car")}
            />
            <Form.Check
              type="checkbox"
              id="bike"
              label="Bike"
              checked={checkbox.bike === "yes"}
              onChange={(e) => chkhandleOnChange(e, "bike")}
            />
            <Form.Check
              type="checkbox"
              id="auto"
              label="Auto"
              checked={checkbox.auto === "yes"}
              onChange={(e) => chkhandleOnChange(e, "auto")}
            />
          </div>
        </Form.Group>

        <br></br>
        <br></br>

        {!updateval ? (
          <Button type="submit" onClick={submit}>
            Submit
          </Button>
        ) : (
          <Button onClick={() => updateBtn()}> Update</Button>
        )}
      </Form>

      <br></br>
      <br></br>

      {view.length == 0 ? (
        <Table striped bordered hover>
          <tr>
            <th>User No.</th>
            <th>FirstName</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Car</th>
            <th>Bike</th>
            <th>Auto</th>
            <th>DELETE</th>
            <th>VIEW</th>
            <th>EDIT</th>
          </tr>
          {usersData.map((userData, index) => {
            return (
              <tr key={index}>
                <td>User {index + 1}</td>
                <td>{userData.firstname}</td>
                <td>{userData.phnum}</td>
                <td>{userData.dob}</td>
                <td>{userData.addr}</td>
                <td>{userData.gender}</td>
                {/* {console.log("ll", userData)} */}
                <td>{userData.vehicles.car ? "Yes" : "No"}</td>
                <td>{userData.vehicles.bike ? "Yes" : "No"}</td>
                <td>{userData.vehicles.auto ? "Yes" : "No"}</td>
                <td>
                  <Button onClick={() => deleteUserData(index)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => ViewUserData(userData)}> View</Button>
                </td>
                <td>
                  {!updateval && (
                    <Button onClick={() => editData(userData)}> Edit</Button>
                  )}
                  {updateval && (
                    <div>
                      <Button onClick={() => cancelBtn(userData)}>
                        {" "}
                        Cancel
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </Table>
      ) : (
        <Table>
          <tr>
            <th>User No.</th>
            <th>FirstName</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Car</th>
            <th>Bike</th>
            <th>Auto</th>
          </tr>
          {/* {console.log("000", view)} */}
          {view.length < 2 &&
            view.map((userData, index) => {
              return (
                <tr key={index}>
                  <td>User {index + 1}</td>
                  <td>{userData.firstname}</td>
                  <td>{userData.phnum}</td>
                  <td>{userData.dob}</td>
                  <td>{userData.addr}</td>
                  <td>{userData.gender}</td>
                  <td>{userData.vehicles.car ? "Yes" : "No"}</td>
                  <td>{userData.vehicles.bike ? "Yes" : "No"}</td>
                  <td>{userData.vehicles.auto ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          x
        </Table>
      )}
    </div>
  );
};

export default Forms;
