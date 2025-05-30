import { useRef } from "react";

function CertificateGenerator() {
  const canvasRef = useRef(null);

  const certificateData = {
    name: "John Doe",
    course: "Full Stack Web Development",
    date: new Date().toLocaleDateString(),
  };

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#fdf6e3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Title
    ctx.font = "30px serif";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Completion", canvas.width / 2, 100);

    // Name
    ctx.font = "24px sans-serif";
    ctx.fillText(`This certifies that`, canvas.width / 2, 170);
    ctx.font = "bold 28px sans-serif";
    ctx.fillText(certificateData.name, canvas.width / 2, 210);

    // Course
    ctx.font = "20px sans-serif";
    ctx.fillText(`has successfully completed`, canvas.width / 2, 250);
    ctx.font = "bold 24px sans-serif";
    ctx.fillText(certificateData.course, canvas.width / 2, 290);

    // Date
    ctx.font = "18px sans-serif";
    ctx.fillText(`Date: ${certificateData.date}`, canvas.width / 2, 350);
  };

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border rounded shadow-lg"
      ></canvas>
      <div className="flex gap-4">
        <button
          onClick={generateCertificate}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Generate Certificate
        </button>
        <button
          onClick={downloadCertificate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
}

export default CertificateGenerator;
