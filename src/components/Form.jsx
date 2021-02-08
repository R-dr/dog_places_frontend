// This form is used to create a new and edit an existing location information.
// A user must be signed in to create a new location, A user must be admin to edit a location

import { Form, Checkboxes } from "../styles/NewLocation";
// Props for the form are passed in from the NewLcoation or Edit Location
function GeneratedForm({
  details,
  locationTypes,
  facilityTypes,
  handleFormChange,
  handleCheckChange,
  handleSubmit,
}) {
  const fields = ["name", "address", "description"];

  // Captialise Name for consistency
  function capitaliseName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
      {/* Name, description and address fields */}
      {fields.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item}>{capitaliseName(item)}</label>
            <input
              type="text"
              name={item}
              id={item}
              value={details[item]}
              onChange={handleFormChange}
            />
          </div>
        );
      })}

      {/* Select option for category. Location types are retrived from static assets  */}
      <label htmlFor="category">Category:</label>
      <select
        name="location_type_name"
        id="location_type_name"
        value={details.location_type_name}
        onChange={handleFormChange}
      >
        <option value selected>
          -- Please select --
        </option>
        {locationTypes &&
          locationTypes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>

      {/* Checkboxes for facilities. Facility types are retrived from static assets */}
      <Checkboxes>
        {facilityTypes &&
          facilityTypes.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  value={item}
                  onChange={handleCheckChange}
                />
                <label htmlFor={item}> {capitaliseName(item)}</label>
              </div>
            );
          })}
      </Checkboxes>

      <button id="submit" type="submit" value="Submit">
        Submit!
      </button>
    </Form>
  );
}

export default GeneratedForm;
