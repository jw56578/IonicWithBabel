import playLists from './state/playlists/playlists';




export default function controllers (mod) {

    angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope) {
    });
    mod.controller('PlaylistsCtrl',playLists);
}
