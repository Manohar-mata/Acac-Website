const teams = [
  { id: 1, name: "Team Alpha" },
  { id: 2, name: "Team Beta" },
  { id: 3, name: "Team Gamma" },
  { id: 4, name: "Team Delta" },
  { id: 5, name: "Team Epsilon" },
  { id: 6, name: "Team Zeta" },
]

const LeaguesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-slate-900">Leagues</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt={`${team.name} logo`}
                className="w-10 h-10 rounded-full object-cover border border-gray-300 flex-shrink-0"
              />
              <h3 className="text-xl font-bold text-slate-800 flex-1">{team.name}</h3>
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaguesPage
