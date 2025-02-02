import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function ExtensionActivity() {
  const [formData, setFormData] = useState({
    deptName: "",
    // facultyName: "",
    title: "",
    startDate: "",
    endDate: "",
    activityTitle: "",
    schemeName: "",
    role: "",
    purpose: "",
    studentParticipants: "",
    facultyParticipants: "",
    attainedPOsPSOs: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API or performing any other actions.
    console.log(formData);
  };

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        className="border border-gray-300 w-85 mx-auto p-2 my-2 rounded-md"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mx-auto underline underline-offset-2"
        >
          Extension Activity
        </Typography>

        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name of the Dept
              </Typography>
              <Input
                size="lg"
                name="deptName"
                value={formData.deptName}
                placeholder="Name of the Dept"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            {/* <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name of the faculty
              </Typography>
              <Input
                size="lg"
                name="facultyName"
                value={formData.facultyName}
                placeholder="Name of the faculty"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div> */}
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Title
              </Typography>
              <Input
                size="lg"
                name="title"
                value={formData.title}
                placeholder="Title"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Start Date
              </Typography>
              <Input
                size="lg"
                name="startDate"
                value={formData.startDate}
                placeholder="Start Date"
                type="date"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                End Date
              </Typography>
              <Input
                size="lg"
                name="endDate"
                value={formData.endDate}
                placeholder="End Date"
                type="date"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Title of extension activity
              </Typography>
              <Input
                size="lg"
                name="activityTitle"
                value={formData.activityTitle}
                placeholder="Title of extension activity"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Name of the scheme
              </Typography>
              <Input
                size="lg"
                name="schemeName"
                value={formData.schemeName}
                placeholder="Name of the scheme"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Role
              </Typography>
              <Input
                size="lg"
                name="role"
                value={formData.role}
                placeholder="Role"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Purpose of activity
              </Typography>
              <Input
                size="lg"
                name="purpose"
                value={formData.purpose}
                placeholder="Purpose of activity"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                No. of student participant
              </Typography>
              <Input
                size="lg"
                name="studentParticipants"
                value={formData.studentParticipants}
                placeholder="No. of student participant"
                type="number"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                No. of faculty participant/Contributed
              </Typography>
              <Input
                size="lg"
                name="facultyParticipants"
                value={formData.facultyParticipants}
                placeholder="No. of faculty participant/Contributed"
                type="number"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <Typography variant="h6" color="blue-gray" className="mb-3">
                POs, PSOs attained through this activity
              </Typography>
              <Input
                size="lg"
                name="attainedPOsPSOs"
                value={formData.attainedPOsPSOs}
                placeholder="POs, PSOs attained through this activity"
                onChange={handleChange}
                className="border-t-blue-gray-200 focus-border-t-gray-900"
              />
            </div>
          </div>
          <div className="mb-4">
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Place of the extension activity
            </Typography>
            <Input
              size="lg"
              name="place"
              value={formData.place}
              placeholder="Place of the extension activity"
              onChange={handleChange}
              className="border-t-blue-gray-200 focus-border-t-gray-900"
            />
          </div>
          <Button type="submit" className="mt-4" fullWidth>
            Add Changes
          </Button>
        </form>
      </Card>
    </>
  );
}
