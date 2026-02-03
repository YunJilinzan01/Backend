<script setup lang="ts"></script>

<template>
  <div id="card">
    <el-card class="container">
      <header class="title">
        <div class="left">
          <slot name="title">Lorem, ipsum dolor</slot>
        </div>
        <div class="right">icon</div>
      </header>
      <main class="content">
        <slot name="content">220</slot>
      </main>
      <footer class="footer">
        <slot name="footer">+15 今日新增</slot>
      </footer>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
#card {
  margin: 20px 0;
  .container {
    width: 260px;
    height: 130px;
    cursor: pointer;
    border-radius: 10px;
    background: white;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 30%;
      .left {
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        color: #5a5f68ff;
      }
    }
    .content {
      margin-top: 6px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      color: #17191cff;
    }
    .footer {
      margin-top: 5px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: #5a5f68ff;
    }
  }
}
</style>
