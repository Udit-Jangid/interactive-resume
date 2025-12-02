import { Download } from 'lucide-react'

function DownloadResumeButton({ resume }) {
  const generatePDF = async () => {
    try {
      const { jsPDF } = window.jspdf || await import('jspdf')
      
      // Create a new PDF document
      const pdf = new jsPDF()
      let yPosition = 20

      // Add header
      pdf.setFontSize(20)
      pdf.text(resume.personal.name, 20, yPosition)
      yPosition += 10

      pdf.setFontSize(10)
      pdf.setTextColor(100)
      pdf.text(`${resume.personal.email} | ${resume.personal.phone} | ${resume.personal.location}`, 20, yPosition)
      yPosition += 15

      // Add summary
      pdf.setFontSize(12)
      pdf.setTextColor(0)
      pdf.text('Professional Summary', 20, yPosition)
      yPosition += 7

      pdf.setFontSize(10)
      const splitSummary = pdf.splitTextToSize(resume.personal.summary, 170)
      pdf.text(splitSummary, 20, yPosition)
      yPosition += splitSummary.length * 5 + 10

      // Add experience
      if (resume.experience && resume.experience.length > 0) {
        pdf.setFontSize(12)
        pdf.text('Work Experience', 20, yPosition)
        yPosition += 7

        resume.experience.forEach((exp) => {
          if (yPosition > 270) {
            pdf.addPage()
            yPosition = 20
          }

          pdf.setFontSize(10)
          pdf.setTextColor(0, 0, 139)
          pdf.text(`${exp.role} at ${exp.company}`, 20, yPosition)
          yPosition += 5

          pdf.setFontSize(9)
          pdf.setTextColor(100)
          pdf.text(`${exp.startDate} to ${exp.endDate}`, 20, yPosition)
          yPosition += 5

          pdf.setFontSize(9)
          pdf.setTextColor(0)
          const splitDesc = pdf.splitTextToSize(exp.description, 170)
          pdf.text(splitDesc, 20, yPosition)
          yPosition += splitDesc.length * 4 + 3

          // Add skills
          pdf.setFontSize(8)
          pdf.text(`Skills: ${exp.skills.join(', ')}`, 20, yPosition)
          yPosition += 5
        })
      }

      // Add education
      if (resume.education && resume.education.length > 0) {
        if (yPosition > 260) {
          pdf.addPage()
          yPosition = 20
        }

        pdf.setFontSize(12)
        pdf.text('Education', 20, yPosition)
        yPosition += 7

        resume.education.forEach((edu) => {
          pdf.setFontSize(10)
          pdf.setTextColor(0, 128, 0)
          pdf.text(`${edu.degree} in ${edu.field}`, 20, yPosition)
          yPosition += 5

          pdf.setFontSize(9)
          pdf.setTextColor(100)
          pdf.text(`${edu.institution} (${edu.graduationDate})`, 20, yPosition)
          yPosition += 5
        })
      }

      // Save the PDF
      pdf.save(`${resume.personal.name.replace(/\s+/g, '_')}_Resume.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  // Fallback: Print to PDF
  const handlePrintPDF = () => {
    window.print()
  }

  return (
    <button
      onClick={generatePDF}
      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium whitespace-nowrap"
    >
      <Download className="w-4 h-4" />
      <span className="hidden sm:inline">Download PDF</span>
      <span className="sm:hidden">PDF</span>
    </button>
  )
}

export default DownloadResumeButton
