import { useState, useEffect } from "react";
import {
  LogOut,
  Download,
  Search,
  Grid,
  Table2,
  Filter,
  X,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import SkillFilter from "../components/SkillFilter";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ViewToggle from "../components/ViewToggle";
import DownloadResumeButton from "../components/DownloadResumeButton";

function ResumePage({ onLogout }) {
  const [resume, setResume] = useState(null);
  const [filteredExperience, setFilteredExperience] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("timeline");
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  // Load resume data
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch("/resume.json");
        const data = await response.json();
        setResume(data);
        setFilteredExperience(data.experience || []);
      } catch (error) {
        console.error("Error loading resume:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  // Filter experience based on search and skills
  useEffect(() => {
    if (!resume) return;

    let filtered = resume.experience || [];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (exp) =>
          exp.company.toLowerCase().includes(query) ||
          exp.role.toLowerCase().includes(query) ||
          exp.description.toLowerCase().includes(query)
      );
    }

    // Filter by selected skills
    if (selectedSkills.length > 0) {
      filtered = filtered.filter((exp) =>
        selectedSkills.some((skill) => exp.skills.includes(skill))
      );
    }

    setFilteredExperience(filtered);
  }, [resume, searchQuery, selectedSkills]);

  const getAllSkills = () => {
    if (!resume) return [];
    const skills = new Set();
    resume.experience.forEach((exp) => {
      exp.skills.forEach((skill) => skills.add(skill));
    });
    return Array.from(skills);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedSkills([]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resume...</p>
        </div>
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <p className="text-red-600">Error loading resume</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {resume.personal.name}
              </h1>
              <p className="text-sm text-gray-600">
                {resume.personal.location}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <DownloadResumeButton resume={resume} />
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Section */}
        <section className="mb-8 bg-white rounded-lg shadow p-6 animate-slideDown">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {resume.personal.summary}
          </p>
        </section>

        {/* Filter & Search Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 gap-4">
            {/* Search Bar */}
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            {/* Skill Filter */}
            <SkillFilter
              skills={getAllSkills()}
              selectedSkills={selectedSkills}
              onChange={setSelectedSkills}
            />

            {/* Active Filters */}
            {(searchQuery || selectedSkills.length > 0) && (
              <div className="flex flex-wrap gap-2 items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  Active Filters:
                </span>
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Search: {searchQuery}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="hover:text-blue-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() =>
                        setSelectedSkills((prev) =>
                          prev.filter((s) => s !== skill)
                        )
                      }
                      className="hover:text-green-900"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={handleClearFilters}
                  className="ml-auto text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              </div>
            )}
          </div>
        </section>

        {/* View Toggle */}
        <div className="mb-6 flex gap-2">
          <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
        </div>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>

          {filteredExperience.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
              <Filter className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">
                No experience matches your filters
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-3 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {viewMode === "timeline" ? (
                <ExperienceTimeline
                  experience={filteredExperience}
                  expandedId={expandedId}
                  onToggle={setExpandedId}
                />
              ) : (
                /* Cards View */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredExperience.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border-l-4 border-blue-600 animate-slideDown"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          <p className="text-blue-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setExpandedId(expandedId === exp.id ? null : exp.id)
                          }
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {expandedId === exp.id ? "−" : "+"}
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {exp.startDate} to {exp.endDate}
                      </p>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">
                          Skills:
                        </p>
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
                        <div className="pt-4 border-t border-gray-200 animate-slideDown">
                          <p className="text-sm font-medium text-gray-900 mb-2">
                            Key Achievements:
                          </p>
                          <ul className="list-disc list-inside space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-700">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.skills.map((skillCategory) => (
              <div
                key={skillCategory.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-blue-600">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-800 text-sm rounded-full font-medium hover:from-blue-200 hover:to-indigo-200 transition cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-4">
            {resume.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500 hover:shadow-lg transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{edu.field}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded">
                    {edu.graduationDate}
                  </span>
                </div>
                <p className="text-gray-700 mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResumePage;
