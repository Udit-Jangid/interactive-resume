import { ChevronDown, Briefcase } from 'lucide-react'

function ExperienceTimeline({ experience, expandedId, onToggle }) {
  return (
    <div className="space-y-6">
      {experience.map((exp, index) => (
        <div key={exp.id} className="flex gap-6 animate-slideDown">
          {/* Timeline marker */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
              <Briefcase className="w-5 h-5" />
            </div>
            {index !== experience.length - 1 && (
              <div className="w-1 h-16 bg-gradient-to-b from-blue-300 to-gray-200 mt-2"></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-6">
            <div
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 cursor-pointer border-l-4 border-blue-600"
              onClick={() => onToggle(expandedId === exp.id ? null : exp.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {exp.startDate} to {exp.endDate}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedId === exp.id ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <p className="text-gray-700 mt-3">{exp.description}</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {expandedId === exp.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 animate-slideDown">
                  <p className="text-sm font-medium text-gray-900 mb-3">Key Achievements:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceTimeline
