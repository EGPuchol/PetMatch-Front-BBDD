import './BarraProgreso.css'; 

const BarraProgreso = ({ currentStep, totalSteps }) => {
  const progreso = (currentStep / totalSteps) * 100;

  return (
    <div className="barraProgreso-container">
      <div className="barraProgreso" style={{ width: `${progreso}%` }}></div>
    </div>
  );
};

export default BarraProgreso;