const express = require('express')
const router = express.Router()
const DayStreaks = require('../../models/user.models/DayStreak')

router.post('/api/post/daystreak', async (req, res) => {
    let daystreak;
    const lastStreak = await DayStreaks.findOne().sort({ createdAt: -1 });

    if (lastStreak) {
        const currentTime = new Date();
        const lastActivityTime = new Date(lastStreak.createdAt);
        const timeDifference = currentTime - lastActivityTime;

        const minutesInADay = 3;
        const millisecondsInAMinute = 60000;
        if (timeDifference >= minutesInADay * millisecondsInAMinute) {
            // If more than 3 minutes have passed, update the existing daystreak
            lastStreak.DayStreak = lastStreak.DayStreak + 1;
            daystreak = lastStreak;
        } else {
            // Otherwise, create a new daystreak record
            daystreak = new DayStreaks({
                DayStreak: lastStreak.DayStreak,
            });
        }
    } else {
        // If no previous daystreak record exists, create a new one
        daystreak = new DayStreaks({
            DayStreak: 1,
        });
    }

    // Save or update the daystreak record
    const saveData = await daystreak.save();

    if (saveData) {
        return res.status(201).json({ message: "Data created", data: saveData });
    } else {
        return res.status(404).json({ message: "Data not created" });
    }


});

router.get('/api/get/daystreak',async(req,res)=>{
    try{
        const getData = await DayStreaks.find()
    if(getData){
        return res.status(200).json({message:"data found",data:getData})
    }
    else{
    return res.status(404).json({message:"data not found"})
    } 

    }catch(error){}
})


router.delete("/api/delete/daystreak",async(req,res)=>{
    try{
        const deleteData = await DayStreaks.deleteMany()
        if(deleteData){
            return res.status(200).json({message:"data deleted",data:deleteData})
        }
        else{
            return res.status(400).json({message:"data was not deleted"})
        }
    }catch(error){

    }
})


module.exports = router