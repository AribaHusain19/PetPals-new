const Adoption = require('../models/Adoption');

exports.getAll=async(req,res)=>{
    try{
        const adoptions= await Adoption.find();
        res.json(adoptions);
    }
    catch(error){
        console.log(error);
        res.status(404).json(error);
    }
}

exports.getOne=async(req,res)=>{
    
    try{
        const { id }=req.params;
        const adoptions= await Adoption.findById(id);
        res.json(adoptions);
    }
    catch(error){
        console.log(error);
        res.status(404).json(error);
    }
}


exports.create=async(req,res)=>{
    try{
        const { FirstName, LastName, email, address, phone, pet }=req.body;

        const adoptedPet = await Adoption.create(
            {
                FirstName,
                LastName,
                email,
                address,
                phone,
                pet,
            }
        );
        res.json({message: 'Adoption Created',adoptedPet});
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
};

exports.update=async(req,res)=>{
    try{
        const { id } = req.params;
        const { FirstName, LastName, email, address, phone, pet }=req.body;

        const updatedAdoptedPet = await Adoption.findByIdAndUpdate(id,
            {
                FirstName,
                LastName,
                email,
                address,
                phone,
                pet
            }
        );
        res.json({message: 'Adoption Updated',updatedAdoptedPet});
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
      const adoptions = await Adoption.findByIdAndDelete(id);
  
      res.json({ message: "Adoption successfuly deleted", adoptions });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };