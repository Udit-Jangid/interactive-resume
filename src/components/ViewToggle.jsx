import { Grid, Table2 } from 'lucide-react'

function ViewToggle({ currentView, onViewChange }) {
  return (
    <div className="flex gap-2 bg-white rounded-lg shadow p-1">
      <button
        onClick={() => onViewChange('timeline')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
          currentView === 'timeline'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Table2 className="w-4 h-4" />
        <span className="hidden sm:inline">Timeline</span>
      </button>
      <button
        onClick={() => onViewChange('cards')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition ${
          currentView === 'cards'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Grid className="w-4 h-4" />
        <span className="hidden sm:inline">Cards</span>
      </button>
    </div>
  )
}

export default ViewToggle
