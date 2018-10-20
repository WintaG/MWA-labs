import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from "@angular/router";

import { DbService } from "../db.service";

import { Injectable } from "@angular/core";



@Injectable()

export class ErrorGuard implements CanActivate {



    private service: DbService;



    constructor(dbService: DbService, private r: Router) {

        this.service = dbService;

    }



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const results = this.service.getData().find(e => e['_id'] == route.params.id)

        if (results) 

            return true; 

        else 

            this.r.navigate(['error'])

    }

}