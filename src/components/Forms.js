import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    //console.log(field);
    // console.log(event.target.value);
    //const { name, value } = event.target;
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
  //   data.filter((user, currentIndex) => currentIndex != indexTodelete)

  const [selUserIndex, setselUserIndex] = useState();

  const ViewUserData = (user) => {
    // console.log("909", userData);
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
      <form>
        <label>
          Enter your Name :<p>{inputs.firstname}</p>
          <input
            name="firstname"
            type="text"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Enter your Phone Number :
          <input
            name="phnum"
            type="number"
            value={inputs.phnum}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Enter your Date of Birth :
          <input
            name="dob"
            type="date"
            value={inputs.dob}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Enter your Address :
          <input
            name="addr"
            type="text"
            value={inputs.addr}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <p>Gender?</p>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={onGenselect}
          checked={gender === "Male"}
        />
        <label>Male</label>
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={onGenselect}
          checked={gender === "Female"}
        />
        <label>Female</label>
        <br></br>
        <input
          type="radio"
          name="gender"
          value="Others"
          onChange={onGenselect}
          checked={gender === "Others"}
        />
        <label>Others</label>
        <p>Select the vehicles you have : </p>
        <input
          type="checkbox"
          onChange={(e) => chkhandleOnChange(e, "car")}
          checked={checkbox.car == "yes"}
        />
        <label> Car</label>
        {/* <p>{checkbox.car}</p> */}
        <input
          type="checkbox"
          onChange={(e) => chkhandleOnChange(e, "bike")}
          checked={checkbox.bike == "yes"}
        />
        <label> Bike</label>
        {/* <p>{checkbox.bike}</p> */}
        <input
          type="checkbox"
          onChange={(e) => chkhandleOnChange(e, "auto")}
          checked={checkbox.auto == "yes"}
        />
        <label> Auto</label>
        {/* <p>{checkbox.auto}</p> */}
        <br></br>
        <br></br>

        <br></br>
        <br></br>

        <br></br>
        <br></br>
        {!updateval ? (
          <input type="submit" onClick={submit} />
        ) : (
          <button onClick={() => updateBtn()}> Update</button>
        )}
      </form>

      {view.length == 0 ? (
        <table>
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
                  <button onClick={() => deleteUserData(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => ViewUserData(userData)}> View</button>
                </td>
                <td>
                  {!updateval && (
                    <button onClick={() => editData(userData)}> Edit</button>
                  )}
                  {/* <button onClick={() => editData(userData)}> Edit</button> */}
                  {updateval && (
                    <div>
                      <button onClick={() => cancelBtn(userData)}>
                        {" "}
                        Cancel
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <table>
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
        </table>
      )}
    </div>
  );
};

export default Forms;
