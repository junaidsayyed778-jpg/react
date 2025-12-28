function Card(props) {
  return (
   <div  className="mt-5 flex flex-col gap-5 md:flex-row">
         <div className="relative mt-20 w-[300px] rounded-[14px] bg-white p-5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.15)]">
      
      {/* ❌ Delete Button */}
      <button 
        className="absolute top-2 right-3 cursor-pointer text-lg font-bold text-red-500"
        
        onClick={()=>{
           props.handleDelete(props.idx)
        }}
      >
        ✖
      </button>

      <img 
        src={props.elem.imageUrl}
        alt="profile"
        className="mx-auto mb-3 h-[120px] w-[120px] rounded-full object-cover"
      />

      <h3 className="m-auto text-[#333]">
        {props.elem.name}
      </h3>

      <p className="mb-2 text-sm text-gray-500">
       {props.elem.role}
      </p>

      <p className="text-sm text-gray-600">
        {props.elem.description}
      </p>
    </div>
      </div>
  );
}

export default Card;


