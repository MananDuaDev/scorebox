var app = angular.module("scoreBoxApp", []);
app.controller("scoreBoxCtrl", function($scope) {
   $scope.teamDetail1 ={
       "id":1,
       "team_name":"Tasmania Women",
       "team_score":"227/9 (50)",
       "playing":[{
           "id":1,
           "player_name":"Sasha Maloney",
           "info":"b NM Hancock",
           "r":"2",
           "b":"2",
           "four":"2",
           "six":"2",
           "sr":"2"
       },
       {
        "id":2,
        "player_name":"Rachel Priest",
        "info":"c E Kershaw b Madeline Penna",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":3,
        "player_name":"Nicola Carey",
        "info":"c C Leeson b A Yates",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":4,
        "player_name":"Heather Graham",
        "info":"c AR Reakes b Olivia Porter",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":5,
        "player_name":"Naomi Stalenberg",
        "info":"Not out",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":6,
        "player_name":"Corinne Hall",
        "info":"c C Leeson b A Yates",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":7,
        "player_name":"Emma Thompson",
        "info":"b NM Hancock",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":8,
        "player_name":"Emily Smith",
        "info":"c CL Rafferty b EA Osborne",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":9,
        "player_name":"Belinda Vakarewa",
        "info":"b NM Hancock",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":10,
        "player_name":"Amy Smith",
        "info":"runout (E Kershaw / A Yates)",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
        "id":11,
        "player_name":"Samantha Bates",
        "info":"Not out",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    }],
    "bowling":[{
        "id":1,
        "bowler_name":"Nicola Hancock",
     "w":"0",
     "o":"6",
     "m":"2",
     "r":"2",
     "eco":"4.00",
    },
    {
     "id":2,
     "bowler_name":"Chloe Rafferty",
     "w":"1",
     "o":"8",
     "m":"2",
     "r":"76",
     "eco":"32.00",
 },
 {
     "id":3,
     "bowler_name":"Madeline Penna",
     "w":"2",
     "o":"3",
     "m":"2",
     "r":"9",
     "eco":"32.00",
 },
 {
     "id":4,
     "bowler_name":"Carly Leeson",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"40.00",
 },
 {
     "id":5,
     "bowler_name":"Amy Yates",
     "w":"3",
     "o":"5",
     "m":"2",
     "r":"23",
     "eco":"12.00",
 },
 {
     "id":6,
     "bowler_name":"Erin Osborne",
     "w":"0",
     "o":"9",
     "m":"2",
     "r":"15",
     "eco":"39.00",
 },
 {
     "id":7,
     "bowler_name":"C",
     "w":"1",
     "o":"7",
     "m":"1",
     "r":"12",
     "eco":"20.00",
 }]

   };
   $scope.teamDetail2 ={
    "id":1,
    "team_name":"Tasmania Women",
    "team_score":"227/9 (50)",
    "playing":[{
        "id":1,
        "player_name":"SMaloney",
        "info":"b NM Hancock",
        "r":"2",
        "b":"2",
        "four":"2",
        "six":"2",
        "sr":"2"
    },
    {
     "id":2,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":3,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":4,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":5,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":6,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":7,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":8,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":9,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":10,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 },
 {
     "id":11,
     "player_name":"Sasha Maloney",
     "info":"b NM Hancock",
     "r":"2",
     "b":"2",
     "four":"2",
     "six":"2",
     "sr":"2"
 }],

 "bowling":[{
        "id":1,
        "bowler_name":"Sasha Maloney2",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
    },
    {
     "id":2,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 },
 {
     "id":3,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 },
 {
     "id":4,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 },
 {
     "id":5,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 },
 {
     "id":6,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 },
 {
     "id":7,
     "bowler_name":"Sasha Maloney",
     "w":"2",
     "o":"2",
     "m":"2",
     "r":"2",
     "eco":"2",
 }]

};

$scope.mofMatch = {
    "mofm_name": "Heather Graham"
};

$scope.matchDetails = {
    "date":"7/02/2021",
    "venue":"EPC Solar Park, Canberra",
    "toss":"Tasmania Women won the toss & elected to bat",
    "Umpires":"N/A",
    "tv_umpires":"N/A",
    "match_referre":"" 
};
$scope.teamDetail= function() {
    $scope.hideteam = !$scope.hideteam;

}

});