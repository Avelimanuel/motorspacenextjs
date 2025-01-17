import AddLocalVehicleForm from "@/components/AddLocalVehicleForm";
const AddLocalVehicle = () => {
  return (
    <section className="bg-blue-100">
      <div className="container mx-auto py-24 max-w-2xl">
        <div className="bg-white px-6 py-8 shadow-md rounded-md border m-4 md:m-0">
          <AddLocalVehicleForm />
        </div>
      </div>
    </section>
  );
};

export default AddLocalVehicle;
