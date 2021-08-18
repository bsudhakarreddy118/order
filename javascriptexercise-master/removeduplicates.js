var array=['apple','orange','vannila','orange','apple'];
for(let i=0;i<array.length;i++)
{
    for(let j=0;j<array.length;j++)
    {
        if(i!==j)
        {
            if(array[i]===array[j])
            {
                array.splice(j,1);
            }
        }
    }
}
console.log(array);