import { useState, useEffect } from "react"
import { dummyStudentEnrolled } from "../../assets/assets"
import Loading from "../../Components/Student/Loading"

const StudentsEnrolled = () => {


  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])


  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md
         bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden pb-4">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold text-center sm:table-cell">#</th>
                <th className="px-4 py-3 font-semibold">Student Name</th>
                <th className="px-4 py-3 font-semibold">Course Title</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Enrolled On</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {enrolledStudents.map((student, index) => (
                <tr key={index} className="border-b border-gray-500/20">
                  <td className="px-4 py-3 text-center font-semibold hidden sm:table-cell">{index + 1}</td>
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img src={student.student.imageUrl} alt="image" className="w-9 h-9 rounded-full"/>
                    <span className="truncate">{student.student.name}</span>
                  </td>
                  <td className="px-4 py-3">{student.courseTitle}</td>
                  <td className="px-4 py-3">
                    {new Date(student.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  ) : <Loading />
}

export default StudentsEnrolled