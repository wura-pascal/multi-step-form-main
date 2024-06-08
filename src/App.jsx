import "./App.css";
import StepOne from "./Components/forms/step_one";
import StepTwo from "./Components/forms/step_two";
import StepThree from "./Components/forms/step_three";
import StepFour from "./Components/forms/step_four";

function App() {
  return (
    <>
      <div className="flex items-center justify-center max-w-[1300px] mx-auto">
        <div className="basis-[30%] bg-red-500">Side bar</div>
        <div className="basis-[70%] bg-green-500 h-full">Personal info</div>
        <div className="w-[90%] mx-auto">
          <StepOne />
          <StepTwo />
          <StepThree />
          <StepFour />
        </div>
      </div>
    </>
  );
}

export default App;
