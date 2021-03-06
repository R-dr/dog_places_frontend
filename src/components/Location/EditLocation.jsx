import GeneratedForm from "../Form";
import useStaticAssets from "../../hooks/useStaticAssets";

// Edit location uses the same form and the same static assets for rendering the form as new location does.
function EditLocation({ history }) {
  const staticAssets = useStaticAssets();
  const {
    location_types: locationTypes,
    location_facilities: facilityTypes,
  } = staticAssets;

  // Props passed in to form for new form.
  return (
    <>
      <h1>Edit Location</h1>
      <GeneratedForm
        heading="Update Location"
        formType="update"
        locationTypes={locationTypes}
        facilityTypes={facilityTypes}
        history={history}
      />
    </>
  );
}

export default EditLocation;
