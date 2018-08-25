<?php

namespace App\Presenters;

class HomepagePresenter extends BasePresenter
{

    public function actionVue() {
        //dump($this->getHttpRequest()->getPost());
        $this->sendJson(['status' => 'OK']);
    }

}