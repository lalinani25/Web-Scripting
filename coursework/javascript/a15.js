/* Source: https://stats.oecd.org/ */

let arr = [
    { country: "Australia", nrOfImmigrants: 137465, isoCode: "AUS"},
    { country: "Belgium", nrOfImmigrants: 101553, isoCode: "BEL" },
    { country: "Canada", nrOfImmigrants: 184585, isoCode: "CAN"},
    { country: "Denmark", nrOfImmigrants: 37810, isoCode: "DNK"},
    { country: "Finland", nrOfImmigrants: 23260, isoCode: "FIN"},
    { country: "France", nrOfImmigrants: 200495, isoCode: "FRA"},
    { country: "Germany", nrOfImmigrants: 994819, isoCode: "DEU"},
    { country: "Greece", nrOfImmigrants: 63357, isoCode: "GRC"},
    { country: "Hungary", nrOfImmigrants: 43785, isoCode: "HUN"},
    { country: "Italy", nrOfImmigrants: 191766, isoCode: "ITA"},
    { country: "Japan", nrOfImmigrants: 220612, isoCode: "JPN"},
    { country: "Korea", nrOfImmigrants: 233133, isoCode: "KOR"},
    { country: "Mexico", nrOfImmigrants: 58430, isoCode: "MEX"},
    { country: "Netherlands", nrOfImmigrants: 170612, isoCode: "NLD"},
    { country: "Norway", nrOfImmigrants: 30818, isoCode: "NOR"},
    { country: "Poland", nrOfImmigrants: 163512, isoCode: "POL"},
    { country: "Portugal", nrOfImmigrants: 118124, isoCode: "PRT"},
    { country: "Spain", nrOfImmigrants: 415150, isoCode: "ESP"},
    { country: "Switzerland", nrOfImmigrants: 136962, isoCode: "CHE"},
    { country: "United States", nrOfImmigrants: 707362, isoCode: "USA"},

]

const svgWidth = 1150
const svgHeight = 600

const paddingTopBottom = 50
const paddingLeftRight = 100

const graphWidth = svgWidth - (paddingLeftRight * 2)
const graphHeight = svgHeight - (paddingTopBottom * 2)


let svg = d3.select("main")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background-color", "black")

svg.append("g")
    .append("text")
    .attr("transform", `translate(555, ${paddingTopBottom - 15})`)
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .text("Immigration Number Per Country in 2020")

let yScale = d3.scaleLinear()
    .domain([0, 1000000])
    .range([graphHeight, 0])

let cScale = d3.scaleLinear()
    .domain([0, 1000000])
    .range(["pink", "red"])

let graph = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${paddingTopBottom})`)
        
let update = graph.selectAll("rect")
    .data(arr)

update.enter()
    .append("rect")
    .attr("x", (nrI, i) => i * 50)
    .attr("y", (nrI) => yScale(nrI.nrOfImmigrants))
    .attr("width", 40)
    .attr("height", (nrI) => graphHeight - yScale(nrI.nrOfImmigrants))
    .attr("fill", (nrI) => cScale(nrI.nrOfImmigrants))

let leftAxis = d3.axisLeft(yScale)
    .tickSize([5])

let yAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight - 10}, ${paddingTopBottom})`)
    .call(leftAxis)

yAxis.select("path")
    .style("stroke", "white")

yAxis.selectAll("text")
    .style("stroke", "white")

yAxis.selectAll("line")
    .style("stroke", "white")


let isoCodes = arr.map((i) => { return i.isoCode })

let xScale = d3.scaleBand()
    .domain(isoCodes)
    .range([0, 1000])

let bottomAxis = d3.axisBottom(xScale)
    
let xAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${svgHeight - 45})`)
    .call(bottomAxis)

xAxis.select("path")
    .style("stroke", "white")

xAxis.selectAll("text")
    .style("stroke", "white")

xAxis.selectAll("line")
    .style("stroke", "white")