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