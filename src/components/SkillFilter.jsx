import { ChevronDown } from 'lucide-react'

function SkillFilter({ skills, selectedSkills, onChange }) {
  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      onChange(selectedSkills.filter(s => s !== skill))
    } else {
      onChange([...selectedSkills, skill])
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        Filter by Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition ${
              selectedSkills.includes(skill)
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
      {skills.length === 0 && (
        <p className="text-sm text-gray-500">No skills available</p>
      )}
    </div>
  )
}

export default SkillFilter
