function twoSum(nums: number[], target: number): number[] {
    
    let map = new Map<number, string>();
    
    for (let i in nums) {
        const needed = target - nums[i];
        
        if (map.has(needed)) {
            return [Number(i), Number(map.get(needed) ?? -1)]
        }
        
        
        map.set(nums[i], i)
    }
    
    return [0,0]
}

console.log(twoSum([2,1,9,4,4,56,90,3], 8));