import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CoreService } from "../core/core.service";

export const loginGuard = () => {

    const router = inject(Router);
    const coreService = inject(CoreService);
     

    if (localStorage.getItem('token_start')) {
        return true;
    } else {
        router.navigate(['/login']);
        coreService.openSnackBar('Debe iniciar sesión', 'Hecho');
        return false;
    }
}