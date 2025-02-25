import { useState, useEffect } from "react";
import { useFetch } from "../../helpers/hooks/useFetch";
import { URL_ROUTES } from "../../helpers/urlRoutes";
import { useNavigate } from "react-router-dom";

export const Filters = () => {
  const { data, error } = useFetch(URL_ROUTES.getTagList);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // ✅ Hook para redireccionar

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = data?.data?.filter((tag) =>
        tag?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTags(filtered || []);
      setShowDropdown(filtered?.length > 0);
    } else {
      setShowDropdown(false);
    }
  }, [searchTerm, data]);

  const handleSelectTag = (tag) => {
    const trimmedTag = tag.trim(); 
    setSearchTerm(trimmedTag);
    setShowDropdown(false);
    navigate(`/post/${encodeURIComponent(trimmedTag)}`); 
  };
  

  if (error) return <p className="text-red-500">Error al cargar tags</p>;

  return (
    <div className="relative p-4 w-full max-w-md">
  
      <input
        type="text"
        placeholder="Buscar tags..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />


      {showDropdown && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {filteredTags.map((tag, index) => (
            <div
              key={index}
              onClick={() => handleSelectTag(tag)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
